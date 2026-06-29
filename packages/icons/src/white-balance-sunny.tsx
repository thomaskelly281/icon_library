import { mdiWhiteBalanceSunny } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WhiteBalanceSunny(props: IconComponentProps) {
  return <Icon path={mdiWhiteBalanceSunny} {...props} />;
}

export { mdiWhiteBalanceSunny as path };
