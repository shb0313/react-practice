package com.douzone.emaillist.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.douzone.emaillist.vo.EmailVo;

@Repository
public class EmailRepository {

	@Autowired
	private SqlSession sqlSession;

	public List<EmailVo> findAll() {
		
		return sqlSession.selectList("email.findAll");
	}

	public void insert(EmailVo emailVo) {
		
		sqlSession.insert("email.insert", emailVo);
	}

	public void delete(Long no) {
		
		sqlSession.delete("email.delete", no);
		
	}

}
