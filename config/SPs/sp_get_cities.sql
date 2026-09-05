DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_get_cities;
CREATE PROCEDURE sp_get_cities()
BEGIN
    SELECT
        id,
        city_name,
        state_name,
        country_name
    FROM cities
    WHERE isdeleted = 0
      AND status = 'Active'
    ORDER BY city_name;
    
END $$

DELIMITER ;