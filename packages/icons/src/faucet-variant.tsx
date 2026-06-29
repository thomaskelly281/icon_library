import { mdiFaucetVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FaucetVariant(props: IconComponentProps) {
  return <Icon path={mdiFaucetVariant} {...props} />;
}

export { mdiFaucetVariant as path };
