import { mdiWhiteBalanceIncandescent } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WhiteBalanceIncandescent(props: IconComponentProps) {
  return <Icon path={mdiWhiteBalanceIncandescent} {...props} />;
}

export { mdiWhiteBalanceIncandescent as path };
