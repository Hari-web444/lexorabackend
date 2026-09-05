DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_get_documents;
CREATE PROCEDURE sp_get_documents(
    IN p_id INT(11)
) 
BEGIN
     
    select * from documents WHERE investor_recid = p_id ORDER BY 1 DESC;

END$$

DELIMITER ;