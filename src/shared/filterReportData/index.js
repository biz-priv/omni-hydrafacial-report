const { scanTableData } = require('../dynamoDb/index');

async function filterReportData(result, tableName) {
    try {
        let dbRows = [];
        let reportData = [];
        for (let key in result) {
            result[key]['scheduled datetime'] = JSON.stringify(result[key]['scheduled datetime']);
            result[key]['pod date time'] = JSON.stringify(result[key]['pod date time']);
            result[key]['shipment datetime'] = JSON.stringify(result[key]['shipment datetime']);
            if (result[key]['order status'] == "DEL") {

                let shipment = await scanTableData(tableName, result[key]['file_nbr']);
                if (!shipment.length) {
                    let row = result[key];
                    reportData.push(row);
                    let rowObj = {
                        PutRequest: {
                            Item: row
                        }
                    }
                    dbRows.push(rowObj);
                }
            } else {
                reportData.push(result[key]);
            }
        }
        return [reportData, dbRows];
    } catch (error) {
        console.info(error);
        return [false, error];
    }
}
module.exports = { filterReportData }