DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_reset_password;
CREATE PROCEDURE sp_reset_password(
    IN p_email VARCHAR(100),
    IN p_password VARCHAR(255)
)
BEGIN
    UPDATE investors
    SET portal_password = SHA2(p_password, 256)
    WHERE email = p_email;
END$$

DELIMITER ;