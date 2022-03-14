const dayjs = require("dayjs")
export const currentDate = dayjs().format("DD-MM-YYYY")
export const currentTime = dayjs().format("HH:mm:ss")
export const currentDateTime = Date.now()

export function writefile(message)
 { cy.writeFile('logs/' + currentDate + '-log.txt', message, { flag: 'a+' }) }


