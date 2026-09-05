
DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_updatealltickets;
CREATE PROCEDURE sp_updatealltickets(
    IN p_id INT,
    IN p_reply TEXT,
    IN p_status VARCHAR(50),
    IN p_reply_by INT
)
BEGIN

    SET SQL_SAFE_UPDATES = 0;
    UPDATE tickets
    SET reply = p_reply,
        status = p_status,
        reply_by = p_reply_by,
        reply_date = NOW()
    WHERE id = p_id;
    SET SQL_SAFE_UPDATES = 1;

    SELECT * FROM tickets WHERE id = p_id;

END$$

DELIMITER ;