import { mdiFaucet } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Faucet(props: IconComponentProps) {
  return <Icon path={mdiFaucet} {...props} />;
}

export { mdiFaucet as path };
