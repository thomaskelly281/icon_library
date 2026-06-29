import { mdiCandle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Candle(props: IconComponentProps) {
  return <Icon path={mdiCandle} {...props} />;
}

export { mdiCandle as path };
