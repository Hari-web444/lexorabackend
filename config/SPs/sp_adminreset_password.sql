DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_adminreset_password;
CREATE PROCEDURE sp_adminreset_password(
    IN p_email VARCHAR(100),
    IN p_password VARCHAR(255)
)
BEGIN

    SET SQL_SAFE_UPDATES = 0;
    UPDATE admin_users
    SET password_hash = SHA2(p_password, 256)
    WHERE email = p_email;
    SET SQL_SAFE_UPDATES = 1;

END$$

DELIMITER ;