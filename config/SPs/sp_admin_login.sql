DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_admin_login ;
CREATE PROCEDURE sp_admin_login (
  IN p_email VARCHAR(255),
  IN p_password VARCHAR(255)
)
BEGIN
  
    SELECT
       id, name, email, password_hash, role, is_active, last_login, created_at
    FROM admin_users
    WHERE email = p_email
      AND password_hash = SHA2(p_password, 256)
      AND is_active = 1;

END $$

DELIMITER ;