import { mdiLiquidSpot } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LiquidSpot(props: IconComponentProps) {
  return <Icon path={mdiLiquidSpot} {...props} />;
}

export { mdiLiquidSpot as path };
