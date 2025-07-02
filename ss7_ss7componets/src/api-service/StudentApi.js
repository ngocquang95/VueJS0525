import baseAxios from './BaseAxios';

const ENDPOINT = '/students';

const findAll = async () => {
    return await baseAxios.get(ENDPOINT)
}

const findById = async (id) => {
    return await baseAxios.get(`${ENDPOINT}/${id}`)
}

const create = async (student) => {
    return await baseAxios.post(ENDPOINT, student)
}

const update = async (student) => {
    return await baseAxios.put(`${ENDPOINT}/${student.id}`, student)
}

const updateAll = async (students) => {
    return await baseAxios.put(ENDPOINT, students)
}

const remove = async (id) => {
    return await baseAxios.delete(`${ENDPOINT}/${id}`)
}

export default { findAll, findById, create, update, updateAll, remove };