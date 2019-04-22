import gmailProvider from "./gmail-provider";
import outlookProvider from "./outlook-provider";
import yahooProvider from "./yahoo-provider";

export {gmailProvider};
export {outlookProvider};
export {yahooProvider};

const emailProviders = [gmailProvider, outlookProvider, yahooProvider];
export default emailProviders;
