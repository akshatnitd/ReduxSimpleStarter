import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average(data) {
	return _.round(_.sum(data)/data.length);
}

export default (props) => {

	return(
		<div>
			<Sparklines height={120} width={180} data={props.plotVals}>
				<SparklinesLine color={props.plotColor} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>
				{average(props.plotVals)} {props.units}
			</div>
		</div>
	);
};