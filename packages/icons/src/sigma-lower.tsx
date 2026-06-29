import { mdiSigmaLower } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SigmaLower(props: IconComponentProps) {
  return <Icon path={mdiSigmaLower} {...props} />;
}

export { mdiSigmaLower as path };
