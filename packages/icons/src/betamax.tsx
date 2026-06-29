import { mdiBetamax } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Betamax(props: IconComponentProps) {
  return <Icon path={mdiBetamax} {...props} />;
}

export { mdiBetamax as path };
