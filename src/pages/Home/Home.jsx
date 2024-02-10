import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../redux/reducers/counter/counterSlice";

const Home = () => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div>
			<button
				aria-label="Increment value"
				onClick={() => dispatch(increment())}>
				Increment
			</button>
			{count}
		</div>
	);
};

export default Home;
