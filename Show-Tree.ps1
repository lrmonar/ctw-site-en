param (
    [string]$Path = ".",
    [int]$Depth = 2
)

function Show-Tree {
    param([string]$Path, [int]$Depth)

    $base = (Get-Item $Path).FullName.Split('\').Count

    Get-ChildItem $Path -Recurse -Directory | Where-Object {
        $_.FullName.Split('\').Count -le ($base + $Depth)
    } | ForEach-Object {
        $indent = '  ' * ($_.FullName.Split('\').Count - $base)
        "$indent$($_.Name)"
    }
}

Show-Tree -Path $Path -Depth $Depth