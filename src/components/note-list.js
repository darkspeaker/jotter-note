import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectNote } from '../actions/actions.js';
import { bindActionCreators } from 'redux';

class NoteList extends Component {
	renderList() {
		return this.props.notes
			.filter(note => note.folderid === this.props.selectedfolder.id)
			.map(note => {
				return (
					<li
						className="note-item pl-3 font-weight-bold"
						key={note.id}
						onClick={() => this.props.selectNote(note)}>
						{note.title}
					</li>
				);
			});
	}
	render() {
		return (
			<div className="note-list col-sm-5 col-md-5 px-0 wrap-list">
				<ul>
					{this.renderList()}
				</ul>
			</div>
		);
	}
}
function mapStateToProps(state) {

	return {
		notes: state.notes.notelist,
		selectedfolder: state.folders.selected
	};
}

function mapDispachToProps(dispatch) {

	return bindActionCreators({ selectNote }, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(NoteList);
