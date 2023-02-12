import {create} from "ipfs-http-client";
import {useEffect, useState} from "react";

const key = "2e2b2ef030a2edc41e78";
const secret = "700b9bc7a499735ac2711617d36a6e6ef8732529abc78aca01bf6eb2b57b3786";
const projectId = "2LZrTnoUGA4nGkbex1dabv6qp5w";
const projectSecret = "bc29682177174314dd369a9aab0d6457";
const axios = require('axios');
let fileUrlExposed


const auth = 'Basic ' + require('buffer/').Buffer.from(projectId + ':' + projectSecret).toString('base64');
const client = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    apiPath: '/api/v0',
    headers: {
        authorization: auth,
    }
})

export const pinJSONToIPFS = async(JSONBody) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    return axios
        .post(url, JSONBody, {
            headers: {
                pinata_api_key: key,
                pinata_secret_api_key: secret,
            }
        })
        .then(function (response) {
            return {
                success: true,
                pinataUrl: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
            };
        })
        .catch(function (error) {
            console.log(error)
            return {
                success: false,
                message: error.message,
            }

        });
};

export const FileUploaderInfura = () => {
    const [fileUrl, updateFileUrl] = useState()

    useEffect(() => {
        fileUrlExposed = updateFileUrl

        return () => fileUrlExposed = null
    }, [])
    async function onChange(e) {
        const file = e.target.files[0]
        try {
            const added = await client.add(file)
            const url = `https://wonder-upenn.infura-ipfs.io/ipfs/${added.path}`
            updateFileUrl(url)
            console.log(url)
        } catch (error) {
            console.log('Error uploading file: ', error)
        }

    }

    return (
        <div className="App">
            <h1>IPFS Example</h1>

            <input
                type="file"
                onChange={onChange}
            />
        </div>
    );
}

export default fileUrlExposed
