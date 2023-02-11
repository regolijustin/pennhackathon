import {create} from "ipfs-http-client";
import {useState} from "react";

require('dotenv').config();
const key = process.env.REACT_APP_PINATA_KEY;
const secret = process.env.REACT_APP_PINATA_SECRET;
const projectId = "2LZrTnoUGA4nGkbex1dabv6qp5w";
const projectSecret = "bc29682177174314dd369a9aab0d6457";
const axios = require('axios');

const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
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

export const FileUploaderInfura = () =>{
    const [fileUrl, updateFileUrl] = useState('')
    async function onChange(e) {
        const file = e.target.files[0]
        try {
            const added = await client.add(file)
            const url = `https://[your_dedicated_gateway_name].infura-ipfs.io/ipfs/${added.path}`
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
            {

                fileUrl && (
                    <img src={fileUrl} width="600px" />
                )
            }
            <p>{fileUrl}</p>

        </div>
    );
}
