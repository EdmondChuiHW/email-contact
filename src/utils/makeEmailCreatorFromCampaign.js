
export default function makeEmailCreatorFromCampaign({ body, subject }) {
  return function emailCreator({ role = 'Mayor', lastName = 'Iveson', ward = '' }) {
    const textBody = `Hello ${role} ${lastName},

${body}`;

    return [textBody, subject];
  };
}
