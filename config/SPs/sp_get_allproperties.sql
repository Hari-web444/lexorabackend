DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_get_allproperties;
CREATE PROCEDURE sp_get_allproperties()
BEGIN
   
    SELECT 
        *
    FROM
        properties
    WHERE
        phase = 'One';

END$$

DELIMITER ;