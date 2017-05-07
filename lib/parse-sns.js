module.exports.parse = (sns) => {

    if (sns.Records) {
        const r = sns.Records[0];
        if (r.Sns) {
            return {
                subject: r.Sns.Subject,
                message: r.Sns.Message,
            };
        }
    }

    return sns;

}