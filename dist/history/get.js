"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleJobHistory = exports.getJobHistory = exports.getEventHistory = void 0;
const helpers_1 = require("../helpers");
const getEventHistory = async (baseURL) => {
    const url = `${baseURL}/api/v1/history/events`;
    const events = await (0, helpers_1.get)(url);
    for (const event of events) {
        event.time = new Date(event.time);
    }
    return events;
};
exports.getEventHistory = getEventHistory;
const getJobHistory = async (baseURL) => {
    const url = `${baseURL}/api/v1/history/print_jobs`;
    const history = await (0, helpers_1.get)(url);
    for (const job of history) {
        job.datetime_cleaned = new Date(job.datetime_cleaned);
        job.datetime_started = new Date(job.datetime_started);
        job.datetime_finished = new Date(job.datetime_finished);
    }
    return history;
};
exports.getJobHistory = getJobHistory;
const getSingleJobHistory = async (baseURL, jobUUID) => {
    const url = `${baseURL}/api/v1/history/print_jobs/${jobUUID}`;
    const job = await (0, helpers_1.get)(url);
    job.datetime_cleaned = new Date(job.datetime_cleaned);
    job.datetime_started = new Date(job.datetime_started);
    job.datetime_finished = new Date(job.datetime_finished);
    return job;
};
exports.getSingleJobHistory = getSingleJobHistory;
