import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    onSelectedOrder: (sortOrder: string) => void;
    sortOrder: string
}

const SortSelector = ({onSelectedOrder, sortOrder}: Props) => {
    const sortOrders = [
        { value:'', label: 'Relevance' }, 
        { value:'-added', label: 'Name' },
        { value:'name', label: 'Data added' }, 
        { value:'-released', label: 'Release date' }, 
        { value:'-metacritic', label: 'Popularity' }, 
        { value:'-rating', label: 'verage rating' }
    ]

    const courrentSortOrder = sortOrders.find(order => order.value === sortOrder);
    
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: {courrentSortOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {/* <MenuItem>Relevance</MenuItem>
                <MenuItem>Data added</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>Release date</MenuItem>
                <MenuItem>Popularity</MenuItem>
                <MenuItem>Average rating</MenuItem> */}

                {sortOrders.map(order => 
                    <MenuItem onClick={()=>onSelectedOrder(order.value)} key={order.value} value={order.value}>
                        {order.label}
                    </MenuItem>)}
            </MenuList>
        </Menu>
    )



}

export default SortSelector;