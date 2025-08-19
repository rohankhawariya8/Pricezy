export const COIN_TO_RS = 0.5; // 2 coins = Rs1 => 1 coin = Rs0.5
export const RS_TO_COINS = (rs:number)=> Math.ceil(rs/COIN_TO_RS);
export const TODAY_IST = () => {
  const now = new Date();
  return new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
};
