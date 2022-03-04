async function send_email(transporter, today) {
    return new Promise((resolve, reject) => {
        transporter.sendMail(
            {
                from: process.env.SMTP_SENDER,
                to: process.env.SMTP_RECEIVER,
                subject: "HydraFacial - Daily Milestone Report - Omni Logistics",
                text: "Please check the attachment for report",
                html: "<b>Please check the attachment for report</b>",
                attachments: [
                    {
                        filename: 'Omni_hydraFacial_report_' + today + '.csv',
                        path: '/tmp/data.csv'
                    },
                ],
            },
            (error, info) => {
                if (error) {
                    console.error("Email Error occurred : \n" + JSON.stringify(error));
                    reject(error);
                }
                console.info("Email sent : \n", JSON.stringify(info));
                resolve(info);
            }
        );
    })
}

module.exports = { send_email }

