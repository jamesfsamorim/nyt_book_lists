import { RankStatusProps } from "@/models/rank.status.model";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { HotStatusRankBackground, NegativeStatusRankBackground, NeutralStatusRankBackground, PositiveStatusRankBackground } from "./rank.status.style";

export const RankStatus = ({rank, rank_last_week}: RankStatusProps) => {
    const getRankStatus = () => {
        if (rank_last_week === 0) {
            return <HotStatusRankBackground><WhatshotIcon /></HotStatusRankBackground >
        }

        const rankResult = rank - rank_last_week;

        if (rankResult === 0) {
            return <NeutralStatusRankBackground><TrendingFlatIcon /></NeutralStatusRankBackground >;
        }

        return rankResult > 0
            ? <NegativeStatusRankBackground><TrendingDownIcon />{Math.abs(rankResult)}</NegativeStatusRankBackground >
            : <PositiveStatusRankBackground><TrendingUpIcon />{Math.abs(rankResult)}</PositiveStatusRankBackground >;
    };

    return getRankStatus()
}