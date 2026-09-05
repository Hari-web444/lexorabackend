DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_addadminmessages;
CREATE PROCEDURE sp_addadminmessages(
    IN p_invid      INT(11),
    IN p_subject    VARCHAR(100),
    IN p_message    VARCHAR(100),
    IN p_createdby  INT(11)
)
BEGIN
    
             
                INSERT INTO admin_message (investor_id, subject, message, created_at,created_by)
    VALUES (p_invid, p_subject, p_message, NOW(),p_createdby);
 
    SELECT LAST_INSERT_ID() AS id;

END$$

DELIMITER ;