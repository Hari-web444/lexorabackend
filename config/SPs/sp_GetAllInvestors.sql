


DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_GetAllInvestors;
CREATE PROCEDURE sp_GetAllInvestors(
IN p_search VARCHAR(100),
IN p_status VARCHAR(30)
)
BEGIN
     SELECT 
		*
	FROM
		investors
	WHERE
		isdeleted = 0 
	AND (
        p_search IS NULL
        OR p_search = ''
        OR full_name LIKE CONCAT('%', p_search, '%')
        OR investor_id LIKE CONCAT('%', p_search, '%')
        OR mobile LIKE CONCAT('%', p_search, '%')
    )

    AND (
        p_status IS NULL
        OR p_status = ''
        OR status = p_status
    )

	GROUP BY id , investor_id , full_name , mobile , city , status
	ORDER BY id DESC;
END$$

DELIMITER ;