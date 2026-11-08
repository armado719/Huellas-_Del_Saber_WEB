import oauth from "netlify-cms-oauth-provider-node";

export default oauth.createVercelBeginHandler({}, { useEnv: true });
