


DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_GetAllPropertiesdata;
CREATE PROCEDURE sp_GetAllPropertiesdata() 
BEGIN
     
    SELECT 
        id,
        property_name,
        location,
        property_type,
        interest_rate,
        description,
        status,
        created_at,
        launch_date,
        phase
    FROM
        properties ORDER BY 1 DESC;

END$$

DELIMITER ;