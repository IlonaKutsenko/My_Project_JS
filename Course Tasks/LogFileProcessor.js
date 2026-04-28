const logMessages = [
  "[INFO] User logged in",
  "[WARNING] Low disk space",
  "[ERROR] Database connection failed",
  "[INFO] Data fetched successfully",
  "[ERROR] API endpoint not found",
];
console.log(logMessages);

const addLog = (logs, newMessage) => [...logs, newMessage];
console.log(addLog(logMessages));

const updatedLog = addLog(logMessages, "[INFO] New log added!"); 
console.log("Updated Logs:", updatedLog);

const getErrorMessages = (logs) => logs.filter(log => log.startsWith("[ERROR]"));
console.log("Errors:", getErrorMessages(updatedLog));

const formatLogMessages = (logs) => logs.map(log => log.replace("[", "").replace("]", ":"));
console.log("Formatted:", formatLogMessages(updatedLog));

const countErrorLogs = (logs) => {
    let count=0;
for (const log of logs) {
        if (log.startsWith("[ERROR]")) {
            count = count + 1;
        }
    }
    return count;
}
console.log("ERRORS:", countErrorLogs(updatedLog));

