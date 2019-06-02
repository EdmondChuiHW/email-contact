import gmailProvider from './gmailProvider';
import outlookProvider from './outlookProvider';
import yahooProvider from './yahooProvider';
import mailToProvider from './mailToProvider';

export {gmailProvider};
export {outlookProvider};
export {yahooProvider};
export {mailToProvider};

const commonEmailProviders = [gmailProvider, outlookProvider, yahooProvider];
export default commonEmailProviders;
