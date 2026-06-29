import { mdiFractionOneHalf } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FractionOneHalf(props: IconComponentProps) {
  return <Icon path={mdiFractionOneHalf} {...props} />;
}

export { mdiFractionOneHalf as path };
