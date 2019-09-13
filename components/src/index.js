import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';
const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail 
					author={faker.name.firstName()}
					timeAgo={faker.date.recent().toDateString()}
					avatar={faker.image.avatar()}
					commentText={faker.lorem.text()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author={faker.name.firstName()}
					timeAgo={faker.date.recent().toDateString()}
					avatar={faker.image.avatar()}
					commentText={faker.lorem.text()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author={faker.name.firstName()}
					timeAgo={faker.date.recent().toDateString()}
					avatar={faker.image.avatar()}
					commentText={faker.lorem.text()}
				/>
			</ApprovalCard>
		</div>	
	)
};

ReactDOM.render(<App/>, document.querySelector('#root'));