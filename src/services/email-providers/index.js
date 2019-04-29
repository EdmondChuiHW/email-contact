import gmailProvider from "./gmail-provider";
import outlookProvider from "./outlook-provider";
import yahooProvider from "./yahoo-provider";
import mailToProvider from "./mailto-provider";

export {gmailProvider};
export {outlookProvider};
export {yahooProvider};
export {mailToProvider};

const commonEmailProviders = [gmailProvider, outlookProvider, yahooProvider];
export default commonEmailProviders;
