


DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_getalllogs;
CREATE PROCEDURE sp_getalllogs() 
BEGIN
     
    SELECT * FROM (SELECT 
        'Return' AS type,
        R.id 			AS rec_id,
        R.investor_id 	AS investor_recid,
        I.investor_id 	AS investor_code,
        I.full_name		AS full_name,
        R.return_month 	AS detail_1,
        R.amount 		AS detail_2,
        R.created_at	AS created_at,
        R.created_by	AS created_by,
        A.name			AS admin_name,
        A.role			AS admin_role
    FROM
        returns AS R
        LEFT JOIN investors 	AS I ON I.id = R.investor_id
        LEFT JOIN admin_users 	AS A ON A.id = R.created_by
        
        UNION ALL
        
        SELECT 
        'Document' 			AS type,
        D.id 				AS rec_id,
        D.investor_recid 	AS investor_recid,
        I.investor_id 		AS investor_code,
        I.full_name			AS full_name,
        D.doc_type 			AS detail_1,
        NULL 				AS detail_2,
        D.uploaded_at       AS created_at,
        D.uploaded_by       AS created_by,
        A.name				AS admin_name,
        A.role				AS admin_role
    FROM
        documents AS D 
        LEFT JOIN investors 	AS I ON I.id = D.investor_recid
        LEFT JOIN admin_users 	AS A ON A.id = D.uploaded_by
        
            UNION ALL
        
        SELECT 
        'Property' AS type, 
        P.id AS rec_id,
        NULL 	AS investor_recid,
        NULL 		AS investor_code,
        NULL			AS full_name,
        P.property_type 			AS detail_1,
        NULL 		AS detail_2,
        P.created_at	AS created_at,
        P.created_by	AS created_by,
        A.name			AS admin_name,
        A.role			AS admin_role
    FROM
        properties AS P 
        LEFT JOIN admin_users 	AS A ON A.id = P.created_by
        
        UNION ALL
        
    SELECT 
        'Message' 			AS type,
        AM.id 				AS rec_id,
        AM.investor_id 		AS investor_recid,
        I.investor_id 		AS investor_code,
        I.full_name			AS full_name,
        AM.subject 			AS detail_1,
        AM.message 		    AS detail_2,
        AM.created_at       AS created_at,
        AM.created_by       AS created_by,
        A.name				AS admin_name,
        A.role				AS admin_role
    FROM
        admin_message AS AM 
        LEFT JOIN investors 	AS I ON I.id = AM.investor_id
        LEFT JOIN admin_users 	AS A ON A.id = AM.created_by
        
        UNION ALL
        
    SELECT 
        'Support' 			AS type,
        S.id 				AS rec_id,
        S.investor_id 		AS investor_recid,
        I.investor_id 		AS investor_code,
        I.full_name			AS full_name,
        S.subject 			AS detail_1,
        S.reply 		    AS detail_2,
        S.reply_date       AS created_at,
        S.reply_by       	AS created_by,
        A.name				AS admin_name,
        A.role				AS admin_role
    FROM
        tickets AS S 
        LEFT JOIN investors 	AS I ON I.id = S.investor_id
        LEFT JOIN admin_users 	AS A ON A.id = S.reply_by
        
         UNION ALL
            
    SELECT 
        'Investor' 			AS type,
        INV.id 				AS rec_id,
        INV.id 				AS investor_recid,
        INV.investor_id 	AS investor_code,
        INV.full_name		AS full_name,
        NULL 				AS detail_1,
        NULL		    	AS detail_2,
        INV.created_at      AS created_at,
        INV.created_by      AS created_by,
        A.name				AS admin_name,
        A.role				AS admin_role
    FROM
        investors AS INV
        LEFT JOIN admin_users 	AS A ON A.id = INV.created_by) AS A ORDER BY created_at DESC;

END$$

DELIMITER ;