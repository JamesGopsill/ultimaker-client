"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJobDateTimeCleaned = exports.getJobDateTimeFinished = exports.getJobDateTimeStarted = exports.getJobName = exports.getJobPauseSource = exports.getJobProgress = exports.getJobReprintOriginalUUID = exports.getJobResult = exports.getJobSourceApplication = exports.getJobSourceUser = exports.getJobSource = exports.getJobState = exports.getJobTimeElapsed = exports.getJobTimeTotal = exports.getJobUUID = exports.getJob = void 0;
const helpers_1 = require("../helpers");
const getJob = async (baseURL) => {
    const url = `${baseURL}/api/v1/print_job`;
    const job = await (0, helpers_1.get)(url);
    job.datetime_cleaned = new Date(job.datetime_cleaned);
    job.datetime_finished = new Date(job.datetime_finished);
    job.datetime_started = new Date(job.datetime_started);
    return job;
};
exports.getJob = getJob;
const getJobUUID = (baseURL) => {
    const url = `${baseURL}/api/v1/print_job/uuid`;
    return (0, helpers_1.get)(url);
};
exports.getJobUUID = getJobUUID;
const getJobTimeTotal = (baseURL) => {
    const url = `${baseURL}/api/v1/print_job/time_total`;
    return (0, helpers_1.get)(url);
};
exports.getJobTimeTotal = getJobTimeTotal;
const getJobTimeElapsed = (baseURL) => {
    const url = `${baseURL}/api/v1/print_job/time_elapsed`;
    return (0, helpers_1.get)(url);
};
exports.getJobTimeElapsed = getJobTimeElapsed;
const getJobState = (baseURL) => {
    const url = `${baseURL}/api/v1/print_job/state`;
    return (0, helpers_1.get)(url);
};
exports.getJobState = getJobState;
const getJobSource = (baseURL) => {
    const url = `${baseURL}/api/v1/print_job/source`;
    return (0, helpers_1.get)(url);
};
exports.getJobSource = getJobSource;
const getJobSourceUser = (baseURL) => {
    const url = `${baseURL}/api/v1/print_job/source_user`;
    return (0, helpers_1.get)(url);
};
exports.getJobSourceUser = getJobSourceUser;
const getJobSourceApplication = (baseURL) => {
    const url = `${baseURL}/api/v1/print_job/source_application`;
    return (0, helpers_1.get)(url);
};
exports.getJobSourceApplication = getJobSourceApplication;
const getJobResult = (baseURL) => {
    const url = `${baseURL}/api/v1/print_job/result`;
    return (0, helpers_1.get)(url);
};
exports.getJobResult = getJobResult;
const getJobReprintOriginalUUID = (baseURL) => {
    const url = `${baseURL}/api/v1/print_job/reprint_original_uuid`;
    return (0, helpers_1.get)(url);
};
exports.getJobReprintOriginalUUID = getJobReprintOriginalUUID;
const getJobProgress = (baseURL) => {
    const url = `${baseURL}/api/v1/print_job/progress`;
    return (0, helpers_1.get)(url);
};
exports.getJobProgress = getJobProgress;
const getJobPauseSource = (baseURL) => {
    const url = `${baseURL}/api/v1/print_job/pause_source`;
    return (0, helpers_1.get)(url);
};
exports.getJobPauseSource = getJobPauseSource;
const getJobName = (baseURL) => {
    const url = `${baseURL}/api/v1/print_job/name`;
    return (0, helpers_1.get)(url);
};
exports.getJobName = getJobName;
const getJobDateTimeStarted = async (baseURL) => {
    const url = `${baseURL}/api/v1/print_job/datetime_started`;
    const d = await (0, helpers_1.get)(url);
    if (d.length > 0) {
        return new Date(d);
    }
    return null;
};
exports.getJobDateTimeStarted = getJobDateTimeStarted;
const getJobDateTimeFinished = async (baseURL) => {
    const url = `${baseURL}/api/v1/print_job/datetime_cleaned`;
    const d = await (0, helpers_1.get)(url);
    if (d.length > 0) {
        return new Date(d);
    }
    return null;
};
exports.getJobDateTimeFinished = getJobDateTimeFinished;
const getJobDateTimeCleaned = async (baseURL) => {
    const url = `${baseURL}/api/v1/print_job/datetime_cleaned`;
    const d = await (0, helpers_1.get)(url);
    if (d.length > 0) {
        return new Date(d);
    }
    return null;
};
exports.getJobDateTimeCleaned = getJobDateTimeCleaned;
