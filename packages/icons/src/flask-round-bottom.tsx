import { mdiFlaskRoundBottom } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlaskRoundBottom(props: IconComponentProps) {
  return <Icon path={mdiFlaskRoundBottom} {...props} />;
}

export { mdiFlaskRoundBottom as path };
