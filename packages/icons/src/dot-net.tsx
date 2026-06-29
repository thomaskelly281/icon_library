import { mdiDotNet } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DotNet(props: IconComponentProps) {
  return <Icon path={mdiDotNet} {...props} />;
}

export { mdiDotNet as path };
