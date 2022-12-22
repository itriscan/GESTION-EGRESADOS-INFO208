import {pool} from '../db.js'

export const getUsuario = async() => {
    const result = await pool.query("SELECT id_user, rut, nombres, apellidos, carrera, telefono, mail, pais, region, comuna, situacion_laboral, empresa, cargo, direccion, anio_egreso, instagram, facebook, twitter, linkedin, acerca_de FROM user")
    return result
}

export const postUsuario = async(user) => {
    const [row] = await pool.query("INSERT INTO user (rut, nombres, apellidos, carrera, telefono, mail, password, pais, region, comuna, situacion_laboral, empresa, cargo, direccion, anio_egreso, instagram, facebook, twitter, linkedin, acerca_de) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [
        user.rut, 
        user.nombres, 
        user.apellidos, 
        user.carrera,
        user.telefono,
        user.mail,
        user.password,
        user.pais,
        user.region,
        user.comuna,
        user.situacion_laboral,
        user.empresa,
        user.cargo,
        user.direccion,
        user.anio_egreso,
        user.instagram,
        user.facebook,
        user.twitter,
        user.linkedin,
        user.acerca_de])
    return {row}
} 

export const updateUsuario = async(user) => {
    const[row] = await pool.query("UPDATE user SET rut = ?, nombres = ?, apellidos = ?, carrera = ?, telefono = ?, mail = ?, password = ?, pais = ?, region = ?, comuna = ?, situacion_laboral = ?, empresa = ?, cargo = ?, direccion = ?, anio_egreso = ?, instagram = ?, facebook = ?, twitter = ?, linkedin = ?, acerca_de = ? WHERE id_user = ?", [
        user.rut, 
        user.nombres, 
        user.apellidos, 
        user.carrera,
        user.telefono,
        user.mail,
        user.password,
        user.pais,
        user.region,
        user.comuna,
        user.situacion_laboral,
        user.empresa,
        user.cargo,
        user.direccion,
        user.anio_egreso,
        user.instagram,
        user.facebook,
        user.twitter,
        user.linkedin,
        user.acerca_de,
        user.id_user])
    return {row};
}

export const deleteUsuario = async (user) => {
    const result = await pool.query('DELETE FROM user WHERE id_user = ?', [user.id_user])
    return result

}

export const getUsuarioLogin = async (user) => {
    const [row] = await pool.query('SELECT nombres, apellidos FROM user WHERE id_user = ? and password = ?',[user.id_user, user.password])
    return {row}
}

