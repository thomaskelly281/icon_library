import { mdiWhiteBalanceAuto } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WhiteBalanceAuto(props: IconComponentProps) {
  return <Icon path={mdiWhiteBalanceAuto} {...props} />;
}

export { mdiWhiteBalanceAuto as path };
