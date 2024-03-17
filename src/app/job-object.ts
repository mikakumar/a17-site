export interface JobObject {
    id: Number,
    first_name: String,
    middle_name: String,
    last_name: String,
    email: String,
    m_no: String,
    pres_loc: String,
    pref_loc: String,
    key_skills: String,
    ex_salary: Number,
    tot_ex: String,
    resume_img: File
}

export interface YTdet{
    ytid: string;
}

export interface RegInfo{
    name: String,
    photo: File,
    resume: File,
    email: String,
    password:String,
    pno: Number;
}


export interface LogRegInfo{
    email: String,
    password: String
}