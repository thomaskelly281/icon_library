import { mdiSigma } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Sigma(props: IconComponentProps) {
  return <Icon path={mdiSigma} {...props} />;
}

export { mdiSigma as path };
