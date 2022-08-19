/**
 * 1450. 在既定时间做作业的学生人数
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
    let num = 0
    for (let i = 0; i < startTime.length; i++) {
        const s = startTime[i]
        const e = endTime[i]
        if (s <= queryTime && queryTime <= e) {
            num++
        }
    }
    return num
};


const s = [1,2,3]
const e = [3,2,7]
const q = 4

console.log(busyStudent(s, e, q));
