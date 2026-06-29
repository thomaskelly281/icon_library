import { mdiTorch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Torch(props: IconComponentProps) {
  return <Icon path={mdiTorch} {...props} />;
}

export { mdiTorch as path };
