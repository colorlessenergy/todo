const ToggleAddList = ({ addList, setAddList }) => {
    const toggleAddList = () => {
        setAddList(previousAddList => !previousAddList);
    };

    return (
        <button
            onClick={toggleAddList}
            style={{ color: addList ? '#fcff59 ' : '' }}>
            +
        </button>
    );
};

export default ToggleAddList;
