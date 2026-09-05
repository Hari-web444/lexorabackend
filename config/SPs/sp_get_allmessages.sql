DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_get_allmessages;
CREATE PROCEDURE sp_get_allmessages(
    IN p_id INT(11)
) 
BEGIN
     
    SELECT * FROM admin_message WHERE investor_id = p_id ORDER BY created_at DESC;

END$$

DELIMITER ;